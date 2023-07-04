import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { useAuth } from '../context/AuthProvider';
function Settings() {
  const { signOut } = useAuth();
  return (
    <>
      <BaseLayout showNavBar={true}> </BaseLayout>
    <h1>Settings page</h1>
    <button className=' px-2bg-blue-600 text-white rounded-sm border-2 border-neutral-800' type='button' onClick={signOut}>Sign out</button>
    </>
  );
}

export default Settings;
