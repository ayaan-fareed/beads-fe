import React, { useState, useEffect } from 'react';
import { firebaseAPI } from '../../services/firebase.js';
import './AnalyticsDashboard.css';

export default function AnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [timeRange, setTimeRange] = useState('6months');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadAnalyticsData();
  }, [timeRange]);

  const loadAnalyticsData = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await firebaseAPI.getAnalyticsData();
      setAnalyticsData(data);
    } catch (err) {
      setError('Failed to load analytics data: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="analyticsDashboard">
        <div className="loadingState">
          <div className="loadingSpinner"></div>
          <p>Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="analyticsDashboard">
        <div className="errorMessage">
          <p>{error}</p>
          <button onClick={loadAnalyticsData} className="retryBtn">Retry</button>
        </div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="analyticsDashboard">
        <div className="emptyState">
          <p>No analytics data available</p>
        </div>
      </div>
    );
  }

  const { totalRevenue, totalOrders, avgOrderValue, monthlyData, topProducts, categoryStats, recentOrders } = analyticsData;
  
  const currentMonthSales = monthlyData[monthlyData.length - 1]?.sales || 0;
  const previousMonthSales = monthlyData[monthlyData.length - 2]?.sales || 0;
  const growthRate = previousMonthSales > 0 ? Math.round(((currentMonthSales - previousMonthSales) / previousMonthSales) * 100) : 0;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const renderSalesChart = () => {
    const maxSales = Math.max(...monthlyData.map(item => item.sales), 1);
    const chartHeight = 200;
    
    return (
      <div className="chartContainer">
        <div className="chartBars">
          {monthlyData.map((item, index) => {
            const barHeight = (item.sales / maxSales) * chartHeight;
            return (
              <div key={index} className="chartBar" style={{ height: `${chartHeight}px` }}>
                <div 
                  className="bar" 
                  style={{ height: `${barHeight}px` }}
                  title={`${item.month}: ${formatPrice(item.sales)}`}
                ></div>
                <span className="barLabel">{item.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderPieChart = () => {
    const total = categoryStats.reduce((sum, cat) => sum + cat.sales, 0);
    let currentAngle = 0;
    
    return (
      <div className="pieChartContainer">
        <svg viewBox="0 0 200 200" className="pieChart">
          {categoryStats.map((cat, index) => {
            const percentage = (cat.sales / total) * 100;
            const angle = (percentage / 100) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            
            const startX = 100 + 80 * Math.cos((startAngle * Math.PI) / 180);
            const startY = 100 + 80 * Math.sin((startAngle * Math.PI) / 180);
            const endX = 100 + 80 * Math.cos((endAngle * Math.PI) / 180);
            const endY = 100 + 80 * Math.sin((endAngle * Math.PI) / 180);
            
            const largeArcFlag = angle > 180 ? 1 : 0;
            
            const pathData = [
              `M 100 100`,
              `L ${startX} ${startY}`,
              `A 80 80 0 ${largeArcFlag} 1 ${endX} ${endY}`,
              `Z`
            ].join(' ');
            
            currentAngle += angle;
            
            const colors = ['#667eea', '#51cf66', '#ff922b', '#ff6b6b'];
            
            return (
              <path
                key={index}
                d={pathData}
                fill={colors[index % colors.length]}
                stroke="white"
                strokeWidth="2"
                title={`${cat.category}: ${cat.sales} sales (${percentage.toFixed(1)}%)`}
              />
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="analyticsDashboard">
      <div className="dashboardHeader">
        <h1>Analytics Dashboard</h1>
        <div className="timeRangeSelector">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="timeRangeSelect"
          >
            <option value="7days">Last 7 Days</option>
            <option value="1month">Last Month</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
        </div>
      </div>

      <div className="statsGrid">
        <div className="statCard primary">
          <div className="statIcon">💰</div>
          <div className="statContent">
            <h3>Total Revenue</h3>
            <div className="statValue">{formatPrice(totalRevenue)}</div>
            <div className={`statChange ${growthRate >= 0 ? 'positive' : 'negative'}`}>
              {growthRate >= 0 ? '↑' : '↓'} {Math.abs(growthRate)}% from last month
            </div>
          </div>
        </div>

        <div className="statCard success">
          <div className="statIcon">📦</div>
          <div className="statContent">
            <h3>Total Orders</h3>
            <div className="statValue">{totalOrders}</div>
            <div className="statChange positive">↑ 12% from last month</div>
          </div>
        </div>

        <div className="statCard warning">
          <div className="statIcon">💳</div>
          <div className="statContent">
            <h3>Avg Order Value</h3>
            <div className="statValue">{formatPrice(avgOrderValue)}</div>
            <div className="statChange positive">↑ 5% from last month</div>
          </div>
        </div>

        <div className="statCard info">
          <div className="statIcon">👥</div>
          <div className="statContent">
            <h3>Customers</h3>
            <div className="statValue">1,234</div>
            <div className="statChange positive">↑ 8% from last month</div>
          </div>
        </div>
      </div>

      <div className="chartsGrid">
        <div className="chartCard">
          <h3>Sales Trend</h3>
          <div className="chartContent">
            {renderSalesChart()}
          </div>
        </div>

        <div className="chartCard">
          <h3>Sales by Category</h3>
          <div className="chartContent">
            <div className="categoryChart">
              {renderPieChart()}
              <div className="categoryLegend">
                {analyticsData.categoryStats.map((cat, index) => {
                  const colors = ['#667eea', '#51cf66', '#ff922b', '#ff6b6b'];
                  return (
                    <div key={index} className="legendItem">
                      <div 
                        className="legendColor" 
                        style={{ backgroundColor: colors[index % colors.length] }}
                      ></div>
                      <span>{cat.category} ({cat.percentage}%)</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tablesGrid">
        <div className="tableCard">
          <h3>Top Products</h3>
          <div className="tableContent">
            <div className="tableHeader">
              <div>Product Name</div>
              <div>Sales</div>
              <div>Revenue</div>
            </div>
            {analyticsData.topProducts.map((product, index) => (
              <div key={index} className="tableRow">
                <div className="productName">{product.name}</div>
                <div className="productSales">{product.sales}</div>
                <div className="productRevenue">{formatPrice(product.revenue)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="tableCard">
          <h3>Recent Orders</h3>
          <div className="tableContent">
            <div className="tableHeader">
              <div>Order ID</div>
              <div>Customer</div>
              <div>Amount</div>
              <div>Status</div>
            </div>
            {analyticsData.recentOrders.map((order, index) => (
              <div key={index} className="tableRow">
                <div className="orderId">{order.id}</div>
                <div className="customerName">{order.customer}</div>
                <div className="orderAmount">{formatPrice(order.amount)}</div>
                <div className="orderStatus">
                  <span className={`statusBadge ${order.status}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
