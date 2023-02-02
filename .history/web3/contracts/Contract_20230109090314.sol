// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract CrowdFunding {       //what is needed to fund a Campaign
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[]  donations;
    }

    mapping(uint256 => Campaign) public campaings;

    uint256 public numberOfCampaigns = 0; //public variable

    //all parameters will have an underscore(_) before them
    
    function createCampaign(address _owner, string memory _title, string memory _description, uint256 
    _target, uint256 _deadline, string memory _image) public returns (uint256) {     
        Campaign storage campaing = campaings[numberOfCampaigns];

        //is evrything okay?
        require(campaing.deadline < block.timestamp, "The deadline should be a date in the future.");
        // if everthing is okay
        campaing.owner = _owner;
        campaing.title = _title;
        campaing.description = _description;
        campaing.target = _target;
        campaing.deadline = _deadline;
        campaing.amountCollected = 0;
        campaing.image = _image;

        numberOfCampaigns++;

        return numberOfCampaigns -1;   

    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaing = campaings[_id];

        campaing.donators.push(msg.sender);
        campaing.donations.push(amount);
        //make the transaction

        (bool sent,) = payable(campaing.owner).call{value: amount}("");

        if(sent) {
            campaing.amountCollected = campaing.amountCollected + amount;
        }

    }

    function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        return (campaings[_id].donators, campaings[_id].donations);

    }
    
    //this function doesnt take any parameters since we ruturn all campaings
    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaings = new Campaign[](numberOfCampaigns); //we are creating an empty array with us many elements[{},{},{}]

        //looping through All the Campaigns
        for (uint i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaings[i];

            allCampaings[i]= item;
        }

        return allCampaings;
    }

}