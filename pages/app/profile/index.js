/* eslint-disable react/prop-types */
import ProfileScreen from '../../../src/components/screens/app/ProfileScreen';
import websitePageHOC from '../../../src/components/wrappers/WebsitePage/hoc';
import { authService } from '../../../src/services/auth/authService';
/* import { userService } from '../../../src/services/user/userService'; */

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);
  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    /*     const profilePage = await userService.getProfilePage(ctx); */
    return {
      props: {
        user: {
          ...session,
          /*     ...profilePage.user, */
        },
        /*       posts: profilePage.posts, */
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();

  return {
    props: {},
  };
}

export default websitePageHOC(ProfileScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Profile',
    },
    menuProps: {
      display: false,
    },
    pageBoxProps: {
      backgroundColor: '#E5E5E5',
    },
    footerProps: {
      display: false,
    },
  },
});
