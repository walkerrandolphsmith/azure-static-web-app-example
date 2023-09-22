import Head from 'next/head'

import Landing from '@/components/Landing'
import { contactUsSubmissionFailed } from '@/constants/submissionFormMessages'

const ContactUsError = () => (
  <>
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
    <Landing initialSubmissionMessage={contactUsSubmissionFailed} />
  </>
)

export default ContactUsError
