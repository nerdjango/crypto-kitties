//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KittyContract is IERC721, Ownable{
    mapping(address => uint) public ownerToCatBalance;
    mapping(uint => address) public catTokenIdToOwner;
    mapping(uint => address) public approvedCatTokenIdToSpender;
    struct Cat {
        uint genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }
    Cat[] public catList;

    uint public constant CREATION_LIMIT_GEN0=10;
    string constant _tokenName = "Nerdjango Cat Token";
    string constant _tokenSymbol = "NCAT";

    uint public gen0Counter;


    event Birth(address owner, uint kittenId, uint mumId, uint dadId, uint genes);

    mapping(address => mapping(address => bool)) private operatorApprovals;

    bytes4 internal constant ERC721_RECEIVED = bytes4(
        keccak256("onERC721Received(address,address,uint256,bytes)")
    );
    bytes4 _INTERFACE_ID_ERC165 = 0x01ffc9a7;
    bytes4 _INTERFACE_ID_ERC721 = 0x80ac58cd;

    function totalSupply() external view returns (uint256 total) {
        // is the Unkitty considered part of the supply?
        return catList.length;
    }

    function name() external pure returns (string memory tokenName) {
        return _tokenName;
    }

    function symbol() external pure returns (string memory tokenSymbol) {
        return _tokenSymbol;
    }

    function balanceOf(address owner) external view returns (uint256 balance){
        balance = ownerToCatBalance[owner];
    }

    function ownerOf(uint256 tokenId) external view tokenExists(tokenId) returns  (address owner){
        owner = catTokenIdToOwner[tokenId];
    }

    function safeTransferFrom(address from, address to, uint256 tokenId) external notZeroAddress(from) notZeroAddress(to) tokenExists(tokenId) {
        require(catTokenIdToOwner[tokenId]==from);
        if (msg.sender!=from) {
            require(approvedCatTokenIdToSpender[tokenId]==from);
        }else{
            require(_owns(msg.sender, tokenId));
        }

        if (_isContract(to)){
            _transfer(from, to, tokenId);

            //call onERC721Recieved in the _to contract
            bytes4 result = IERC721Receiver(to).onERC721Received(
                msg.sender,
                from,
                tokenId,
                bytes("")
            );
            require(result==ERC721_RECEIVED);
        }else{
            _transfer(from, to, tokenId);
        }
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external notZeroAddress(from) notZeroAddress(to) tokenExists(tokenId) {
        _transfer(from, to, tokenId);
    }

    function approve(address to, uint256 tokenId) tokenExists(tokenId) external {
        require(msg.sender==catTokenIdToOwner[tokenId]);
        approvedCatTokenIdToSpender[tokenId]=to;
        emit Approval(msg.sender, to, tokenId);
    }

    function getApproved(uint256 tokenId) external view tokenExists(tokenId) returns (address operator){
        operator = approvedCatTokenIdToSpender[tokenId];
    }

    function setApprovalForAll(address operator, bool _approved) external{
        operatorApprovals[msg.sender][operator] = _approved;
        emit ApprovalForAll(msg.sender, operator, _approved);
    }

    function isApprovedForAll(address owner, address operator) external view returns (bool){
        return operatorApprovals[owner][operator];
    }

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external notZeroAddress(from) notZeroAddress(to) tokenExists(tokenId) {
        require(catTokenIdToOwner[tokenId]==from);
        if (msg.sender!=from) {
            require(approvedCatTokenIdToSpender[tokenId]==from);
        }else{
            require(msg.sender==catTokenIdToOwner[tokenId]);
        }

        if (_isContract(to)){
            _transfer(from, to, tokenId);

            //call onERC721Recieved in the _to contract
            bytes4 result = IERC721Receiver(to).onERC721Received(
                msg.sender,
                from,
                tokenId,
                data
            );
            require(result==ERC721_RECEIVED);
        }else{
            _transfer(from, to, tokenId);
        }
    }

    function _isContract(address _to) internal view returns (bool) {
        // wallets will not have any code but contract must have some code
        uint32 size;
        assembly {
            size := extcodesize(_to)
        }
        return size > 0;
    }

    function transfer(address _to, uint256 _tokenId) public notZeroAddress(_to) {
        require(_owns(msg.sender, _tokenId));
        _transfer(msg.sender, _to, _tokenId);
    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal {
        // assign new owner
        catTokenIdToOwner[_tokenId] = _to;

        //update token counts
        ownerToCatBalance[_to] = ownerToCatBalance[_to]++;
        if (_from != address(0)){
            ownerToCatBalance[_from] = ownerToCatBalance[_from]--;
        }

        // emit Transfer event
        emit Transfer(_from, _to, _tokenId);
    }

    modifier notZeroAddress(address addr) {
        require(addr != address(0));
        _;
    }

    modifier tokenExists(uint _tokenId) {
        require(_tokenId<catList.length);
        _;
    }

    function supportsInterface(bytes4 _interfaceId)
        external
        view
        returns (bool)
    {
        return (_interfaceId == _INTERFACE_ID_ERC165 ||
            _interfaceId == _INTERFACE_ID_ERC721);
    }

    function _owns(address _owner, uint _token) internal view returns(bool){
        return catTokenIdToOwner[_token] == _owner;
    }

    function createCatGen0(uint _genes) external onlyOwner returns(uint){
        require(gen0Counter<CREATION_LIMIT_GEN0);
        gen0Counter++;
        return _createCat(0, 0, 0, _genes, msg.sender);
    }

    function _createCat(
        uint _mumId,
        uint _dadId,
        uint _generation,
        uint _genes,
        address _owner
    ) internal returns(uint){
        Cat memory _kitty = Cat({
            genes: _genes,
            birthTime: uint64(block.timestamp),
            mumId: uint32(_mumId),
            dadId: uint32(_dadId),
            generation: uint16(_generation)
        });
        catList.push(_kitty);
        uint newKittenId=catList.length-1;
        _transfer(address(0), _owner, newKittenId);
        emit Birth(_owner, newKittenId, _mumId, _dadId, _genes);
        return newKittenId;
    }

    function getCat(uint tokenId) public view returns(
        uint genes,
        uint birthTime,
        uint mumId,
        uint dadId,
        uint generation,
        address owner
    ) {
        Cat storage kitty = catList[tokenId];
        genes = kitty.genes;
        birthTime = kitty.birthTime;
        mumId = uint(kitty.mumId);
        dadId = uint(kitty.dadId);
        generation = uint(kitty.generation);
        owner = catTokenIdToOwner[tokenId];
    }

}