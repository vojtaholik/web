import React from 'react'
import { Layout, Section, SectionContent } from 'components/layout'
import * as S from 'components/typography'
import * as Links from 'components/links'
import { PageProps } from 'gatsby'
import styled from 'styled-components'

const ShowAndTell: React.FC<PageProps> = () => {
  return (
    <Layout
      crumbs={[{ label: 'Show&Tell' }]}
      seo={{
        title: 'Show&Tell',
        description:
          'Pravidelné živé vysílání prezentace práce dobrovolníků Česko.Digital',
        coverUrl: 'https://data.cesko.digital/img/show-and-tell-2.png',
      }}
    >
      <Section>
        <SectionContent>
          <TwoColumnLayout>
            <MainColumn>
              <S.Heading1>Show&Tell</S.Heading1>
              <p>
                Ve čtvrtek 27. května v 18:00 proběhne druhé živé výsílání
                Show&Tell Česko.Digital.
              </p>
              <VideoWrapper>
                <VideoIFrame
                  src="https://www.youtube.com/embed/9kgwQM2SnC4"
                  title="Show&Tell"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoWrapper>
            </MainColumn>
            <ReminderColumn>
              <S.Heading3>Co mě čeká?</S.Heading3>
              <p>
                V květnovém vysílání se budeme soustředit na dva projekty, které
                přešly z příprav do fáze vývoje. Dozvíte se zajímavosti z
                designu, vývoje i plánování marketingové strategie.
              </p>
              <p>
                Jako bonus zahájíme pravidelný příspěvek od člena leadership
                teamu, takže se můžete těšit na zajímavosti z práce CTO v
                Česko.Digital.
              </p>
              <Links.Link to="/rsvp">Chci to do kalendáře!</Links.Link>
            </ReminderColumn>
          </TwoColumnLayout>
        </SectionContent>
      </Section>
    </Layout>
  )
}

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`

const VideoIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const TwoColumnLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`

const MainColumn = styled.div`
  flex-grow: 1;
`

const ReminderColumn = styled.div`
  max-width: 400px;
  margin-left: 32px;
  
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 0px;
    max-width: 1024px;s
  }
`

export default ShowAndTell
