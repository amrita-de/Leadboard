document.addEventListener('DOMContentLoaded', () => {
    const leaderboardData = [
        { rank: 1, name: "John Doe", calmarRatio: 2.5, overallProfit: "$5000", avgDailyProfit: "$200", winPercentage: "75%", price: "$1000" },
        { rank: 2, name: "Jane Smith", calmarRatio: 2.3, overallProfit: "$4500", avgDailyProfit: "$180", winPercentage: "70%", price: "$950" },
        { rank: 3, name: "Bob Johnson", calmarRatio: 2.1, overallProfit: "$4000", avgDailyProfit: "$160", winPercentage: "65%", price: "$900" },
        // Add more rows as needed
    ];

    const tableBody = document.querySelector('#leaderboard tbody');

    leaderboardData.forEach((data, index) => {
        const row = document.createElement('tr');

        Object.values(data).forEach(text => {
            const cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });

        const actionCell = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = 'View Details';
        button.addEventListener('click', () => {
            alert(`Details of ${data.name}`);
        });
        actionCell.appendChild(button);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    });
});
