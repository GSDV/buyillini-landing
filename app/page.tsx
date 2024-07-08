'use client';

import { useState } from 'react';

import CenterLayout from '@components/CenterLayout';
import Form from '@components/Form';
import { Alert, AlertType } from '@components/Alert';

import formStyles from '@styles/form.module.css';


export default function Page() {
    const [alert, setAlert] = useState<AlertType | null>(null);

    const inputs = [
        {title: 'Name:', name: 'name', type: 'text'},
        {title: 'Email:', name: 'email', type: 'text'}
    ];

    const attemptNotify = async (formData: FormData) => {
        const userName = formData.get('name');
        const userEmail = formData.get('email');

        const res = await fetch('api/', {
            method: 'POST',
            body: JSON.stringify({userName, userEmail}),
            headers: { 'Content-Type': 'application/json' }
        });
        const resJson = await res.json();
        setAlert(resJson);
    }

    return (
        <CenterLayout>
        <h1>BuyIllini</h1>
        <h2>Coming Soon.</h2>
            <div className={formStyles.container}>
                <Form inputs={inputs} submitTitle="Get Notified" action={attemptNotify} />
                {alert && <Alert alert={alert} variations={[]} />}
            </div>
        </CenterLayout>
    );
}