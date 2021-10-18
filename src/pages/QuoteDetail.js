import React from 'react'
import { Route, useParams, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import Comments from '../components/comments/Comments'
import HighlughtedQuote from '../components/quotes/HighlightedQuote'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner'

function QuoteDetail() {
    const params = useParams()
    const match = useRouteMatch()

    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])



    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return <p className='centered focused'> {error}</p>
    }
    if (!loadedQuotes.text) {
        return <p>No quote found</p>
    }
    console.log(params.quoteId)
    console.log(match)
    return (
        <div>
            <HighlughtedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`} >Load Comments</Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </div>
    )
}

export default QuoteDetail
