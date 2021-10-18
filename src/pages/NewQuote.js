import React from 'react'
import { useHistory } from 'react-router'
import { useEffect } from 'react/cjs/react.development';
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http'
import { addQuote } from "../lib/api";


function NewQuote() {
    const history = useHistory()
    const { sendRequest, status } = useHttp(addQuote)

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes')
        }
    }, [status, history])

    const addQuoteHandler = quoteData => {
        sendRequest(quoteData)
    }
    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    )
}

export default NewQuote
