import React from 'react';
import './Papers.css';
import Paper from './Paper';

const Papers = () => {
    return (
        <div className='papers'>
            <h1>Check out my math research papers!</h1>
            <div className='papers_container'>
                <ul className='papers_items'>
                    <div className='paper_and_text'>
                        <Paper 
                            link="https://arxiv.org/abs/1812.08041"
                            src="/images/paper1.png"
                        />
                        <p>
                            In this paper we present a new proof of the following 2010 result of 
                            Dubickas, Novikas, and Siurys:<br/><br/>
                            Theorem. Let (a,b)∈Z<sup>2</sup> and let (x<sub>n</sub>)<sub>n≥0</sub> 
                            be the sequence defined by some initial values x<sub>0</sub> and 
                            x<sub>1</sub> and the second order linear recurrence<br/>
                            x<sub>n+1</sub> = ax<sub>n</sub> + bx<sub>n-1</sub><br/>
                            for n ≥ 1. Suppose that b<span>&#8800;</span>0 and (a,b)<span>&#8800;</span>
                            (2,−1), (−2,−1). Then there exist two relatively prime positive integers x<sub>0</sub>, 
                            x<sub>1</sub> such that |x<sub>n</sub>| is a composite integer for all n∈N.
                        </p>
                    </div>
                    <div className='paper_and_text'>
                        <p>
                            In 1973 Erdos asked whether it is possible to find a triangle-free unit 
                            distance graph that requires four colors. In other words, no equilateral 
                            triangles are allowed. <br/><br/>
                            The problem was solved in 1994 by O’Donnell; his configuration has 56 points. 
                            Smaller graphs have been since discovered and the current record stands at 17 points.
                            In this paper we construct triangle-free unit distance graphs with chromatic 
                            number 4 that have 21 and 19 vertices, respectively. Moreover, the coordinates of 
                            the 19-vertex graph can be written in closed form.
                        </p>
                        <Paper 
                            link="https://drive.google.com/file/d/0B__-5PwpShFJTGxVYkRVamVnd2FnX200T1dobGJ1M2lROTJZ/view"
                            src="/images/paper2.png"
                        />
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Papers;