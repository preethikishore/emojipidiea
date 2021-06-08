import React from 'react';

function Entry(prons)
{
    return  <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label={"Tense Biceps"}>
              {prons.emoji}
            </span>
            <span>{prons.name}</span>
          </dt>
          <dd>
             {prons.description}
          </dd>
        </div>
}
export default Entry