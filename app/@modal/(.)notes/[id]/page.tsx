import { fetchNoteById } from '@/lib/api';
import ModalWrapper from './NotePreview.client';

interface NotePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NoteModalPage({ params }: NotePageProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  if (!note) {
    return <p>Note not found</p>;
  }

  return <ModalWrapper note={note} />;
}
