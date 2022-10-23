import React from 'react';

import { ProjectCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ArticlesStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { articles } from '../../constants/constants';

const Articles = ({ open }) => (
  <Section id="projects" open={open}>
    <SectionDivider />
    <SectionTitle main>All Articles</SectionTitle>
    <GridContainer>
      {articles.map((article, index) => {
        return (
          <ProjectCard key={index}>
          <Img src={article.image} />
            <TitleContent>
              <HeaderThree title>{article.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{article.description}</CardInfo>
            <div>
              <br />
              <TitleContent><b>Article Themes</b></TitleContent>
              <TagList>
                {article.tags.map((tag, index) => {
                  return <Tag key={index}>{tag}</Tag>;
                })}
              </TagList>
            </div>
              <UtilityList>
                {article.source ?
                  <ExternalLinks href={article.source} target="_blank">Link to Article</ExternalLinks>
                  : <p>No Article Link</p>
                }
              </UtilityList>
          </ProjectCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Articles;