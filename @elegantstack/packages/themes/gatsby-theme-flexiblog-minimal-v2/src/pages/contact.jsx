import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'

export default props => (
  <Layout {...props}>
    <Seo title='Contact' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header="Who are We?"
          subheader='As a global media and technology company, BuildItFair has a unique perspective on the intersection of technology and society. We believe that technology can be a force for good, but it must be designed and used responsibly. This means ensuring that technology is not only effective and efficient but also fair, transparent, and accountable. We strive to create awareness and promote best practices in areas such as algorithm bias, fairness in AI, data privacy, and environmental sustainability.

          In the domain of algorithm bias, we believe that it is crucial to address issues of systemic bias and discrimination in technology. This includes recognizing that algorithms can perpetuate biases and discrimination if they are trained on biased data or if their design is biased. We believe in the importance of creating tools and methodologies that can detect and correct these biases and ensure that technology is used in a fair and equitable manner.
          
          Fairness in AI is another important area of focus for us. We believe that AI systems must be designed and used in a way that is fair and non-discriminatory. This means avoiding biased training data, ensuring that decision-making processes are transparent and explainable, and incorporating diverse perspectives and inputs into the system design.
          
          Data privacy is also an area of great concern for us. We believe that individuals have a right to privacy and that technology must respect and protect that right. This includes ensuring that personal data is collected and used only with informed consent and is stored and processed in a secure and responsible manner.
          
          Finally, environmental sustainability is a critical issue for us as a global company. We believe that technology can play a significant role in promoting environmental sustainability, but it must be designed and used in a way that minimizes its impact on the environment. This includes reducing energy consumption, promoting recycling and reuse, and minimizing the use of hazardous materials.
          
          Overall, our mission is to promote ethical and socially responsible practices in the development and use of technology. We believe that technology can be a powerful force for positive change, but it must be used responsibly and with a focus on creating a fair, equitable, and sustainable future for all.'
        />
        <Divider />
        <ContactForm />
      </Main>
    </Stack>
  </Layout>
)
