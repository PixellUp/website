import { Metadata } from 'next';
import { getDoc } from 'lib/docs';
import Markdown from 'components/common/Markdown';

const FOLDER = 'api';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;

  const doc = await getDoc(id, FOLDER);

  return {
    title: {
      absolute: `API: ${doc?.title} – Umami`,
      default: 'API – Umami',
    },
  };
}

export default async function ({ params }: { params: { id: string } }) {
  const { id } = params;

  const doc = await getDoc(id, FOLDER);

  return <Markdown>{doc?.body}</Markdown>;
}
