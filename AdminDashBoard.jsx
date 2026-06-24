import React, { useState } from 'react';
import './AdminDashboard.css';
import FlashcardModal from './FlashcardModal';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('Overview');

    // Sample Data for the Dashboard
    const renderContent = () => {
        console.log("Do I Get Here?"+activeTab)
        switch (activeTab) {
            case 'Overview':
                return <div>Overview Content Goes Here</div>;
            case 'Flashcards':
                console.log("I have clicked the flashcard button!", activeTab)
                return <FlashcardModal />; // 3. This renders your component
            case 'Quizzes':
                return <div>Quizzes Component Goes Here</div>;
            case 'Students':
                return <div>Students List</div>;
            case 'Analytics':
                return <div>Analytics Charts</div>;
            case 'Settings':
                return <div>Settings Form</div>;
            default:
                return <div>Overview Content Goes Here</div>;
        }
    };

    const stats = [
        { id: 1, title: 'Total Flashcards', count: '124', change: '+12 this week', color: '#4f46e5' },
        { id: 2, title: 'Active Quizzes', count: '18', change: '2 pending review', color: '#06b6d4' },
        { id: 3, title: 'Total Students', count: '450', change: '+32 new signups', color: '#10b981' },
        { id: 4, title: 'Avg. Quiz Score', count: '76%', change: '+2.4% vs last month', color: '#f59e0b' },
    ];

    const recentQuizzes = [
        { id: 'Q-104', title: 'Chemical Bonding & Structure', class: 'Senior 4', status: 'Published', responses: 42 },
        { id: 'Q-105', title: 'Introduction to Matter', class: 'Senior 1', status: 'Draft', responses: 0 },
        { id: 'Q-106', title: 'Quadratic Equations Practice', class: 'Senior 3', status: 'Published', responses: 89 },
        { id: 'Q-107', title: 'Acids, Bases & Salts Review', class: 'Senior 2', status: 'Published', responses: 55 },
    ];

    return (
        <div className="admin-container">
            {/* Sidebar Navigation */}
            <aside className="sidebar">
                <div className="sidebar-brand">
                    <h2>EduQuiz Admin</h2>
                </div>
                <div className="dashboard-container" style={{ display: 'flex' }}>
                    {/* Your Sidebar */}
                    <nav className="sidebar-menu">
                        {['Overview', 'Flashcards', 'Quizzes', 'Students', 'Analytics', 'Settings'].map((tab) => (
                            <button
                                key={tab}
                                className={`nav-item ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>

                    {/* Main Content Area */}
                    <main className="main-content">
                        {/* <p>i go to school daily. teach. learn. eat. rest .walk,hhhhhh. </p> */}
                        {renderContent()}
                    </main>
                </div>

                <div className="sidebar-footer">
                    <p>Logged in as Admin</p>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="main-content">
                {/* Top Header */}
                <header className="main-header">
                    <div>
                        <h1>Dashboard Overview</h1>
                        <p className="subtitle">Welcome back! Here is what's happening with your learning app today.</p>
                    </div>
                    <div className="header-actions">
                        <button className="btn btn-secondary">+ New Flashcard</button>
                        <button className="btn btn-primary">+ Create Quiz</button>
                    </div>
                </header>

                {/* Metrics Grid */}
                <section className="metrics-grid">
                    {stats.map((stat) => (
                        <div key={stat.id} className="stat-card" style={{ borderLeft: `4px solid ${stat.color}` }}>
                            <span className="stat-title">{stat.title}</span>
                            <span className="stat-count">{stat.count}</span>
                            <span className="stat-change">{stat.change}</span>
                        </div>
                    ))}
                </section>

                {/* Content Section: Table and Quick Links */}
                <section className="dashboard-body">
                    {/* Recent Quizzes Table */}
                    <div className="content-card table-wrapper">
                        <h3>Recent Activity & Quizzes</h3>
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Quiz Title</th>
                                    <th>Class Level</th>
                                    <th>Status</th>
                                    <th>Responses</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentQuizzes.map((quiz) => (
                                    <tr key={quiz.id}>
                                        <td><strong>{quiz.id}</strong></td>
                                        <td>{quiz.title}</td>
                                        <td><span className="badge class-badge">{quiz.class}</span></td>
                                        <td>
                                            <span className={`badge status-badge ${quiz.status.toLowerCase()}`}>
                                                {quiz.status}
                                            </span>
                                        </td>
                                        <td>{quiz.responses}</td>
                                        <td>
                                            <button className="table-btn edit">Edit</button>
                                            <button className="table-btn view">View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Quick Tasks Sidebar Panel */}
                    <div className="content-card quick-tasks">
                        <h3>Quick Actions</h3>
                        <div className="task-list">
                            <div className="task-item">
                                <h4>Review Flagged Questions</h4>
                                <p>1 question reported by students for typos.</p>
                            </div>
                            <div className="task-item">
                                <h4>Export Results</h4>
                                <p>Download CSV reports for end-of-term marks.</p>
                            </div>
                            <div className="task-item">
                                <h4>App Updates</h4>
                                <p>Flashcard sync successful (v1.2.0).</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
}