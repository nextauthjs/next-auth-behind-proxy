import { useRouter } from "next/router";
import Layout from "../components/layout"

export default function IndexPage() {
  const router = useRouter();
  if (router.query.code && router.query.state) router.replace('/', undefined, { shallow: true });
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </p>
    </Layout>
  )
}
