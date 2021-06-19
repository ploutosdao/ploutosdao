// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "hardhat/console.sol";

error ElectionError();

contract Election {

    struct  Candidate {
        uint id;
        string name;
        uint voteCount;
        bool bySender;
    }
    
    // Store accounts that have voted
    mapping(address => uint) voters;
    // Store Candidates
    // Fetch Candidate
    mapping(uint => Candidate) candidates;
    // Store Candidates Count
    uint candidatesCount;

    // voted event
    event votedEvent(uint indexed _candidateId);

    constructor() {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
        console.log("deploying an election");
    }

    function addCandidate(string memory _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0, false);
    }

    function vote(uint _candidateId) public {
        console.log("got a vote for %s from %s", _candidateId, msg.sender);
        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount, "invalid candidate");

        // require that they haven't voted before
        require(voters[msg.sender] != _candidateId, "already voted");        
        
        if (voters[msg.sender] > 0) {
            candidates[voters[msg.sender]].voteCount--;
        }

        // record that voter has voted
        voters[msg.sender] = _candidateId;

        // update candidate vote Count
        candidates[_candidateId].voteCount++;

        // trigger voted event
        emit votedEvent(_candidateId);
    }

    function getAllCandidates() public view returns (Candidate[] memory) {
        Candidate[] memory allCandidates = new Candidate[](candidatesCount);
        for (uint i = 1; i <= candidatesCount; i++) {
            allCandidates[i-1] = candidates[i];
            allCandidates[i-1].bySender = voters[msg.sender] == i;
        }
        return allCandidates;
    }
    
}
