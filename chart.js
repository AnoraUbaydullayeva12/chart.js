export function createLineChart() {
  const ctx = document.getElementById('lineChart').getContext('2d');
     new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Sales in $',
          data: [120, 190, 300, 800, 100, 300],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          fill: true,
          tension: 0.3, // smooth curve
          pointBackgroundColor: 'rgba(75, 192, 192, 1)'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}