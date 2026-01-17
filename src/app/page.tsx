'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Contador</h1>
                <div className={styles.counter}>
                    <p className={styles.number}>{count}</p>
                </div>
                <button className={styles.button} onClick={increment}>
                    Incrementar
                </button>
            </div>
        </main>
    );
}
