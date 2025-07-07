//  -- Chart.js Script --

    new Chart(document.getElementById('loginChart').getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Logins',
          data: [12, 19, 14, 17, 10, 15, 18],
          backgroundColor: '#1f98a6'
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } }
      }
    });

    new Chart(document.getElementById('caseChart').getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Pending Survey', 'Pending ILA/LOR', 'Pending FSR', 'Pending QC', 'Pend: QC'],
        datasets: [{
          label: 'Cases',
          data: [15, 9, 22, 12, 8],
          backgroundColor: ['#1f98a6', '#36b9cc', '#f6c23e', '#e74a3b', '#9b59b6']
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'right' } }
      }
    });

    new Chart(document.getElementById('insurerBar').getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Insurer A', 'Insurer B', 'Insurer C', 'Insurer D'],
        datasets: [{
          label: 'Cases',
          data: [40, 30, 15, 8],
          backgroundColor: '#1f98a6'
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false } }
      }
    });

    new Chart(document.getElementById('expenseStatus').getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Pending', 'Approved', 'Rejected'],
        datasets: [{
          label: 'Claims',
          data: [20, 45, 15],
          backgroundColor: ['#f6c23e', '#1cc88a', '#e74a3b']
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } }
      }
    });