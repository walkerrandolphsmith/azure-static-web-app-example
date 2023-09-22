import Head from 'next/head'

import Landing from '@/components/Landing'
import { contactUsSubmissionSuccessful } from '@/constants/submissionFormMessages'

const ContactUs = () => (
  <>
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
    <Landing initialSubmissionMessage={contactUsSubmissionSuccessful} />
  </>
)

export default ContactUs
