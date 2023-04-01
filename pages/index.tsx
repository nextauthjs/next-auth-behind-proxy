import { useRouter } from "next/router";
import Layout from "../components/layout"
import { useEffect } from 'react';

export default function IndexPage() {
  const router = useRouter();
  useEffect(() => {
    if (router.query.code && router.query.state) router.replace('/', undefined, { shallow: true });
  }, [router.query])
  return (
    <Layout>
      <h1>NextAuth.js Behind a proxy example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication when deployed behind a Netlify proxy.
      </p>
    </Layout>
  )
}
