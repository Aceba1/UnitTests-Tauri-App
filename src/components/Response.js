import React, { useContext } from 'react'
import { RequestContext } from '../contexts/RequestContext'
import TextContextProvider from '../contexts/TextContext';
//import Body from './PageBody';
import Pager from './Pager';
import TextPropsJSON from './TextPagePropsJSON';
import TextRaw from './TextPageRaw';

export default function Response() {
  const { resp, status } = useContext(RequestContext);

  return resp != null ? (
    <TextContextProvider 
      text={resp}
      setText={() => {}}
    >
      <Pager 
        className="Response BodyPager code"
        pages={[TextRaw, TextPropsJSON] 
        /*
          TODO: Conditionally show TextPropsJSON if data is valid JSON
          Possibly consider HTML page?
        */} 
      />
    </TextContextProvider>
  ) : (
    <div 
      className="Response linebreak EmptyResponse" 
      dangerouslySetInnerHTML={{__html: status}} 
    />
  )
  //TODO: Resolve header acquisition
  /*
    <ContentContextProvider 
      header={resp.header}
      body={resp.body}
      setHeader={() => {}}
      setBody={() => {}}
    >
      <Pager 
        className="ResponsePager"
        pages={[ Header, Body ]} 
      />
    </ContentContextProvider>
  */
}
