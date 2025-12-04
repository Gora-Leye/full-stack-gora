import React from 'react';
import Layout from './Layout';
import MetricCard from './MetricCard';

const Dashboard = ({ onLogout, currentUser }) => {
  const metrics = [
    { title: 'Formulaires', number: '125', description: 'je ne sais pas quoi mettre', color: 'purple' },
    { title: 'E-mails', number: '25', description: 'je ne sais pas quoi mettre', color: 'red' },
    { title: 'Messages', number: '40', description: 'je ne sais pas quoi mettre', color: 'green' },
    { title: 'Hôtels', number: '40', description: 'je ne sais pas quoi mettre', color: 'indigo' },
    { title: 'Utilisateurs', number: '600', description: 'je ne sais pas quoi mettre', color: 'yellow' },
    { title: 'Entités', number: '02', description: 'je ne sais pas quoi mettre', color: 'blue' },
  ];

  return (
    <Layout 
      title="Dashboard" 
      onLogout={onLogout}
      currentUser={currentUser}
    >
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Bienvenue sur RED Product. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              number={metric.number}
              description={metric.description}
              color={metric.color}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;