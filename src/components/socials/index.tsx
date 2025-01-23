import React from 'react';

const socials = [
  { title: 'Facebook', link: 'https://www.facebook.com/', className: 'fab fa-facebook-f' },
  { title: 'Google', link: 'https://www.google.co.uk/', className: 'fab fa-google-plus-g' },
  { title: 'Linkedin', link: 'https://www.linkedin.com/', className: 'fab fa-linkedin-in' }];

type SocialItemProps = {
  className: string;
  link: string;
}

const SocialItem = ({ link, className }: SocialItemProps): JSX.Element => (
  <a href={link} className='social'><i className={className}></i></a>
);

const Socials = (): JSX.Element => (
  <div className='social-container'>
    {socials.map(({ title, className, link }) => (<SocialItem className={className} key={title} link={link} />))}
  </div>
);

export default Socials;
