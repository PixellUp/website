import { Metadata } from 'next';
import { getDoc } from 'lib/docs';
import Markdown from 'components/common/Markdown';

const FOLDER = 'v1';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;

  const doc = await getDoc(id, FOLDER);

  return {
    title: {
      absolute: `Docs (v1): ${doc?.title} – Umami`,
      default: 'Docs (v1) – Umami',
    },
  };
}

export default async function ({ params }: { params: { id: string } }) {
  const { id } = params;

  const doc = await getDoc(id, FOLDER);

  return <Markdown>{doc?.body}</Markdown>;
}
