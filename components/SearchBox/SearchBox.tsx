import css from './SearchBox.module.css';
import { ChangeEvent } from 'react';

interface SearchBoxProps {
  onChange(value: string): void;
}

export function SearchBox({ onChange }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      onChange={e => onChange(e.target.value)}
      type="text"
      placeholder="Search notes"
    />
  );
}
