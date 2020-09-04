import fetch from 'isomorphic-unfetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const createHttpLink = (headers) => {
  const httpLink = new HttpLink({
    uri: 'https://https://skilled-gibbon-31.hasura.app/v1/graphql',
    fetch,
  });
  return httpLink;
};
const createWSLink = () => {
  return new WebSocketLink(
    new SubscriptionClient(
      'wss://https://skilled-gibbon-31.hasura.app/v1/graphql',
      {
        lazy: true,
        reconnect: true,
      }
    )
  );
};
export default function createApolloClient(initialState, headers) {
  const ssrMode = typeof window === 'undefined';
  let link;
  if (ssrMode) {
    link = createHttpLink(headers); // executed on server
  } else {
    link = createWSLink(); // executed on client
  }
  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState),
  });
}
