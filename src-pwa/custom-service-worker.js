import { setCacheNameDetails } from 'workbox-core/setCacheNameDetails';
import { skipWaiting } from 'workbox-core/skipWaiting';
import { clientsClaim } from 'workbox-core/clientsClaim';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { registerRoute } from 'workbox-routing/registerRoute';
import { NavigationRoute } from 'workbox-routing/NavigationRoute';
import { createHandlerBoundToURL} from 'workbox-precaching/createHandlerBoundToURL';

setCacheNameDetails({ prefix: "quasar-sample" });

skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST, {});

registerRoute(new NavigationRoute(
    createHandlerBoundToURL("index.html"),
    {
        denylist: [
            /service-worker\.js$/,
            /workbox-(.)*\.js$/
        ],
    }
));
