import React from 'react';

export default function DashboardLayout({ children, notifications,users,revenue,login }: { children: React.ReactNode; notifications: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    login:React.ReactNode
 }) {
    const isLoggedIn = true;
    return isLoggedIn ? (
        <>
            <div>{children}</div>
            <div className='flex'>
                <div className='flex flex-col'>
                   <div>{users}</div>
                   <div>{revenue}</div>
                </div>
               <div className='flex flex-1'>{notifications}</div>
            </div>
        </>
    ) : (
        login
    )
}
