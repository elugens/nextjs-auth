import { getSession, useSession } from 'next-auth/client';

function Blog({ data }) {
  const [session] = useSession();
  console.log({ session });
  return <h1>Blog Page {data}</h1>;
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // securing pages server side pages in getServerSideProps
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: session ? 'List of 100 Personalized blogs' : 'List of free blogs',
    },
  };
}
