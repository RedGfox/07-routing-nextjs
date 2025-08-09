'use client';

import { useRouter } from 'next/navigation';
import NotePreview from '@/components/NotePreview/NotePreview';
import { Modal } from '@/components/Modal/Modal';
import { Note } from '@/types/note';

interface ModalWrapperProps {
  note: Note;
}

export default function ModalWrapper({ note }: ModalWrapperProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <NotePreview note={note} />
    </Modal>
  );
}
