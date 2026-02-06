import React from 'react';
import HeroCard from '../Cards/HeroCard';
import BioCard from '../Cards/BioCard';
import SkillsCard from '../Cards/SkillsCard';
import GamingCard from '../Cards/GamingCard';
import LabWorkCard from '../Cards/LabWorkCard';
import BlogCard from '../Cards/BlogCard';

const BentoGrid = () => {
    return (
        <div className="grid-bento">
            <HeroCard />
            <BioCard />
            <SkillsCard />
            <GamingCard />
            <LabWorkCard />
            <BlogCard />
        </div>
    );
};

export default BentoGrid;
