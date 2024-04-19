// There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.

// You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].

// Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. 
// If a person does not have any tickets left to buy, the person will leave the line.

// Return the time taken for the person at position k (0-indexed) to finish buying tickets.

 

// Example 1:

// Input: tickets = [2,3,2], k = 2
// Output: 6
// Explanation: 
// - In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].
// - In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].
// The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.
// Example 2:

// Input: tickets = [5,1,1,1], k = 0
// Output: 8
// Explanation:
// - In the first pass, everyone in the line buys a ticket and the line becomes [4, 0, 0, 0].
// - In the next 4 passes, only the person in position 0 is buying tickets.
// The person at position 0 has successfully bought 5 tickets and it took 4 + 1 + 1 + 1 + 1 = 8 seconds.


const approaches = {
    myApproach,
    singleLoopApproach ,
    bestApproach
} 

// First Code
function myApproach(tickets: number[], k: number, timeTaken = 0): number{
    tickets = tickets.map(ticketAvailableForThisPosition => ticketAvailableForThisPosition - 1);

    if(tickets[k] <= 0) return timeTaken + k + 1;
    timeTaken = timeTaken + tickets.length;

    if (tickets.includes(0)) {
        const updatedInfo = removePersonWithNoAvailableTickets(tickets, k);
        tickets = updatedInfo.tickets;
        k = updatedInfo.personPositionInQueue;
    }

    return myApproach(tickets, k, timeTaken);
}

function removePersonWithNoAvailableTickets(tickets: number[], personPositionInQueue: number): {tickets: number[], personPositionInQueue: number} {
    tickets = tickets.filter((ticketsAvailable, index) => {
        const isTicketFinished = ticketsAvailable <= 0
        if(!isTicketFinished) return true;
        if(index < personPositionInQueue) --personPositionInQueue
        return false;
    })
    return { tickets, personPositionInQueue }
}

function singleLoopApproach(tickets: number[], k: number, timeTaken:number = 0): number { 
    for (let distributer = 0; distributer < tickets.length; distributer++) {
        if(tickets[distributer] > 0 ) {
            --tickets[distributer];
            ++timeTaken;
        }
        
        if(distributer === k && !tickets[k]) return timeTaken;
    }

    return singleLoopApproach(tickets, k, timeTaken)
}

function bestApproach(tickets: number[], k: number, timeTaken:number = 0) {
    const ticketsHeroCanBuy = tickets[k];

    tickets.forEach((ticketsAvailable, index) => {
        if (index === k) timeTaken = timeTaken + ticketsAvailable;
        if (index < k) timeTaken =  timeTaken + Math.min(ticketsHeroCanBuy, ticketsAvailable);
        if (index > k) timeTaken =  timeTaken + Math.min(ticketsHeroCanBuy -1, ticketsAvailable);
    })
    return timeTaken
}


export default function execute(): number {
    let tickets: Array<number> = [15,66,3,47,71,27,54,43,97,34,94,33,54,26,15,52,20,71,88,42,50,6,66,88,36,99,27,82,7,72];
    let personPositionInQueue = 18;

    const timeTaken = approaches.bestApproach(tickets, personPositionInQueue);
    console.log(timeTaken)
    return timeTaken;
}