// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";



contract XentroBadgeNFT is ERC1155, Ownable,Pausable {


    uint256 public constant COMMUNITY_BADGE = 0;
    
    uint256 public constant WARRIOR_BADGE = 1;

    uint256 public constant MAX_SUPPLY = 100000;

    uint256 public feeInUSDCents = 150;

    address payable  feeRecipient = payable (0xe116a4A2a386f043a7cac720cFf11ea951993feb);

    address feedAddress = 0x694AA1769357215DE4FAC081bf1f309aDC325306;

    mapping(uint256 => uint256) public badgeCount;

    mapping(address => bool) public hasCommunityBadge;

    mapping(address => bool) public hasWarriorBadge;

    AggregatorV3Interface feed = AggregatorV3Interface(feedAddress);

    // fallback incase of any issues
    function changeFeedAddress (address _newFeedAddress) external onlyOwner{
        feedAddress = _newFeedAddress;
    }



    function pause() public onlyOwner{
        _pause();
    }
    function unPause() public onlyOwner{
        _unpause();
    }  

    function transferOwnrship (address _newOwner) public  onlyOwner{
        _transferOwnership(_newOwner);
    }

    function setURI(string memory _newURI) public onlyOwner {
        _setURI(_newURI);
    }

    function changeCommisionFee(uint256 _feeInUSDCents) external  onlyOwner{
        feeInUSDCents = _feeInUSDCents;
    }

     function changeCommisionRecipient (address payable  _newRecipient) external  onlyOwner{
        feeRecipient = _newRecipient;
    }

    function getCommissionFee() public view returns (uint256) {
      (,int price, , , ) = feed.latestRoundData();
      return (feeInUSDCents*10**24 / uint256(price));
    }

    constructor() ERC1155("ipfs://QmYi9d9srwQdyC1heQP1WgGVuQTeomucjA9hkdqC1ng9cQ/{id}.json") Ownable(msg.sender) {}
    
    function getOwner() view public returns (address){
        return owner();
    } 

    function mintCommunityBadge() public payable  {
        require(badgeCount[COMMUNITY_BADGE] < MAX_SUPPLY, "All community badges have been minted");
        require(!hasCommunityBadge[msg.sender], "You already have a community badge");
        require(msg.sender != address(0), "null address cannot mint");
        uint256 fee = getCommissionFee();
        require(msg.value >= fee,"amount sent is less than fee" );

        _mint(msg.sender, COMMUNITY_BADGE, 1, "");
        hasCommunityBadge[msg.sender] = true;
        badgeCount[COMMUNITY_BADGE]++;
        (bool success,) = feeRecipient.call{value:fee}("");
        require(success,"Falied to tranfer fee to recipient");
    }


    function mintWarriorBadge() public payable  {
        require(badgeCount[WARRIOR_BADGE] < MAX_SUPPLY, "All warrior badges have been minted");
        require(hasCommunityBadge[msg.sender], "You must mint a community badge to mint a warrior badge");
        require(!hasWarriorBadge[msg.sender], "You already have a warrior badge");
        require(msg.sender != address(0), "null address cannot mint");
         uint256 fee = getCommissionFee();
        require(msg.value >= fee ,"amount sent is less than fee" );

        _mint(msg.sender, WARRIOR_BADGE, 1, "");
        hasWarriorBadge[msg.sender] = true;
        badgeCount[WARRIOR_BADGE]++;
          (bool success,) = feeRecipient.call{value:fee}("");
        require(success,"Falied to tranfer fee to recipient");
    }

    function totalSupply() public view returns (uint256) {
        return badgeCount[COMMUNITY_BADGE] + badgeCount[WARRIOR_BADGE];
    }
}
