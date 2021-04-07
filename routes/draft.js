const router = express.Router()

router.use(session()) // with your session options

router.get('/login', () => {
  // here you have to render login page with firebase UI
})

router.post('/login', () => {
  // here you have to take firebase token, validate it and store to the `req.session.adminUser`. It has to be of type: https://adminbro.com/AdminBro.html#CurrentAdmin so you can have avatar, etc.
// and then redirect to /admin (assuming that this is your admin path)
})

// this is copied from authenticatedRouerCode
router.use((req, res, next) => {
    if (AdminBro.Router.assets.find(asset => req.originalUrl.match(asset.path))) {
     // all static assets are available by default
      next()
    } else if (req.session.adminUser) {
      next()
    } else {
      // in the original there is a `redirectTo` property - I skipped this to simplify the example.
      // It causes to redirect to last visited page, when logged out after timeout - check out the code
      // of buildAuthenticatedRouter
      req.session.save((err) => {
        if (err) {
          next(err)
        }
        res.redirect(admin.options.loginPath)
      })
    }
  })

router.get(logoutPath, async (req, res) => {
    req.session.destroy(() => {
      res.redirect(admin.options.loginPath)
    })
  })

// and finally you add adminbro to this router
return buildRouter(admin, router) // you can add formidableOptions if any as a 3rd argument