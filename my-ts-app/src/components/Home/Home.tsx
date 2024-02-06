import React from 'react';
import { HomeWrapper } from './Home.styled';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
 <div>
   <h1>Home</h1>
   <p>Welcome to our website!</p>
 </div>
);

export default Home;
