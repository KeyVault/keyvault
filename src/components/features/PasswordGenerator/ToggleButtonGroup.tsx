import React, { useState } from 'react';

interface ToggleButtonProps {
  label: string;
  active: boolean; // Move active state to prop
  disabled?: boolean;
  onToggle: () => void; // Function to handle toggle
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, disabled, active, onToggle }) => {
  return (
    <button
      disabled={disabled}  // use the disabled prop here
      className={`px-9 py-4 m-2 rounded duration-100 
      ${disabled ? 'opacity-60': ''}
      ${active ? 'bg-blue-600 text-white' : 'bg-neutral-800'}`
      }
      onClick={onToggle}
    >
      {label}
    </button>
  );
};


interface ToggleButtonGroupProps { 
  onToggleChange: (label: string, active: boolean) => void;
}
const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({ onToggleChange }) => {
  const [activeButtons, setActiveButtons] = useState<{[key: string]: boolean}>({
    abc: false,
    ABC: false,
    '123': false,
    '#$&': false,
    Passphrases: false
  });

  const [isPassphraseActive, setPassphraseActive] = useState(false);

  const handleToggle = (label: string) => {
    const isActive = !activeButtons[label];
    setActiveButtons(prev => ({...prev, [label]: isActive}));
    if (label === 'Passphrases') {
      setPassphraseActive(isActive);
    }
    onToggleChange(label, isActive);
  };

  return (
    <div className="flex flex-row justify-evenly flex-wrap">
      <ToggleButton label="abc" active={activeButtons.abc} disabled={isPassphraseActive} onToggle={() => handleToggle('abc')} />
      <ToggleButton label="ABC" active={activeButtons.ABC} disabled={isPassphraseActive} onToggle={() => handleToggle('ABC')} />
      <ToggleButton label="123" active={activeButtons['123']} disabled={isPassphraseActive} onToggle={() => handleToggle('123')} />
      <ToggleButton label="#$&" active={activeButtons['#$&']} disabled={isPassphraseActive} onToggle={() => handleToggle('#$&')} />
      <ToggleButton label="Password | Phrases" active={activeButtons.Passphrases} onToggle={() => handleToggle('Passphrases')} />
    </div>
  );
};

export default ToggleButtonGroup;
