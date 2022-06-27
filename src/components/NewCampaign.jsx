import React, { Component }  from 'react';
import { useState } from "react";

function NewCampaign(props) {
    const [campaignName, setCampaignName] = useState("");
    return ( <h1>NewCampaign</h1> );
}

export default NewCampaign;