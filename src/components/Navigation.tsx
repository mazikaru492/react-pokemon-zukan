// src/components/Navigation.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    const pathname = window.location.pathname;

    return (
        <nav className="bg-gray-100 p-4">
            <ul className="flex space-x-4">
                {/* 一覧画面の場合は一覧ボタンを非表示にする */}
                {pathname !== '/' && (
                    <li>
                        <Link to="/" className="text-blue-500 hover:underline">
                            一覧へ戻る
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;