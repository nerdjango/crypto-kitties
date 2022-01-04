//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma abicoder v2;

import "./Kittycontract.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IKittyMarketplace.sol";

contract KittyMarketplace is Ownable, IKittyMarketPlace {
    KittyContract private _kittyContract;

    struct Offer {
        address payable seller;
        uint price;
        uint index;
        uint tokenId;
        bool active;
    }

    Offer[] offers;

    mapping(uint => Offer) public tokenIdToOffer;

    constructor(address _kittyContractAddress){
        _kittyContract = KittyContract(_kittyContractAddress);
    }

    function setKittyContract(address _kittyContractAddress) onlyOwner external override {
        _kittyContract = KittyContract(_kittyContractAddress);
    }

    function getOffer(uint256 _tokenId) external view override returns ( address seller, uint256 price, uint256 index, uint256 tokenId, bool active){
        seller = tokenIdToOffer[_tokenId].seller;
        price = tokenIdToOffer[_tokenId].price;
        index = tokenIdToOffer[_tokenId].index;
        tokenId = tokenIdToOffer[_tokenId].tokenId;
        active = tokenIdToOffer[_tokenId].active;
    }

    function getAllTokenOnSale() external view override returns(uint256[] memory listOfOffers){
        uint counter = 0;
        
        for (uint i=0; i<offers.length; i++){
            if (offers[i].active==true) {
                counter++;
            }
        }

        if (counter==0){
            uint[] memory result = new uint[](0);
            listOfOffers=result;
        }else{
            uint[] memory result = new uint[](counter);
            uint _index = 0;
            for (uint i=0; i<offers.length; i++){
                if (offers[i].active==true) {
                    result[_index] = offers[i].tokenId;
                    _index++;
                }
            }
            listOfOffers=result;
        }
    }

    function isOnSale(uint256 _tokenId) external view returns(bool) {
        return tokenIdToOffer[_tokenId].active;
    }

    function setOffer(uint256 _price, uint256 _tokenId) external override {
        require(msg.sender==_kittyContract.ownerOf(_tokenId), "You are not the owner of that kitty");
        require(tokenIdToOffer[_tokenId].active==false, "You can't sell twice the same offers ");
        require(_kittyContract.isApprovedForAll(msg.sender, address(this)) == true, "Contract needs to be approved to transfer the kitty in the future");

        Offer memory newOffer = Offer(payable(msg.sender), _price, offers.length, _tokenId, true);
        tokenIdToOffer[_tokenId] = newOffer;
        offers.push(newOffer);
        emit MarketTransaction("Create offer", msg.sender, _tokenId);
    }

    function removeOffer(uint256 _tokenId) external override {
        Offer memory offer = tokenIdToOffer[_tokenId];
        require(
            offer.seller == msg.sender,
            "You are not the seller of that kitty"
        );

        delete tokenIdToOffer[_tokenId];
        offers[offer.index].active = false;

        emit MarketTransaction("Remove offer", msg.sender, _tokenId);
    }

    function buyKitty(uint256 _tokenId) external override payable {
        Offer memory offer = tokenIdToOffer[_tokenId];
        require(msg.value == offer.price, "The price is incorrect");
        require(tokenIdToOffer[_tokenId].active == true, "No active order present");

        // Important: delete the kitty from the mapping BEFORE paying out to prevent reentry attacks
        delete tokenIdToOffer[_tokenId];
        offers[offer.index].active = false;

        // Transfer the funds to the seller
        // TODO: make this logic pull instead of push
        if (offer.price > 0) {
            offer.seller.transfer(offer.price);
        }

        // Transfer ownership of the kitty
        _kittyContract.transferFrom(offer.seller, msg.sender, _tokenId);

        emit MarketTransaction("Buy", msg.sender, _tokenId);
    }
}