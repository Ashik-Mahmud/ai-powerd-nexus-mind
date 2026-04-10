import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/history(.*)', '/settings(.*)', '/upload(.*)']);
const isAuthRoute = createRouteMatcher(['/login(.*)', '/register(.*)']);

export default clerkMiddleware(async (auth, req) => {
    const { userId } = await auth();
    
    // Protect dashboard and related routes
  
    if (isProtectedRoute(req)) {   
        await auth.protect();
    }
    
    // Redirect logged-in users away from auth pages
    if (userId && isAuthRoute(req)) {
        const dashboardUrl = new URL('/dashboard', req.url);
        return Response.redirect(dashboardUrl);
    }

   
});

export const config = {
    matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest))(?:.*))'],
};
