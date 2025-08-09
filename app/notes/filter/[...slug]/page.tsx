import NotesClient from './Notes.client';
import { fetchNotes, FetchNoteResponse } from '@/lib/api';

interface PageProps {
  params: { slug?: string[] };
}

export default async function NotesPage({ params }: PageProps) {
  const slugArray = (await params).slug || [];
  const tag = slugArray[0] ?? 'All';

  const fetchTag = tag === 'All' ? 'All' : tag;

  const initialData: FetchNoteResponse = await fetchNotes(fetchTag, '', 1);

  return (
    <NotesClient
      tag={tag === 'All' ? null : tag}
      initialData={initialData}
      initialPage={1}
    />
  );
}
