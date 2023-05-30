document.addEventListener('DOMContentLoaded', function() {
    // 获取canvas元素
    var ctx = document.getElementById('lineChart').getContext('2d');
  
    // 定义数据
    var data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: '折线图示例',
        data: [10, 20, 30, 25, 35, 40],
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      }]
    };
  
    // 配置选项
    var options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
  
    // 创建折线图
    var lineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });
  });
  