export const vendorJS = () => {
  const modules = [
    'node_modules/swiper/swiper-bundle.min.js',
    'node_modules/swiper/swiper-bundle.min.js.map',
  ];

  return app.gulp.src(modules)
    .pipe(app.gulp.dest(app.path.build.js));
};

export const vendorCSS = () => {
  const modules = [
    'node_modules/swiper/swiper-bundle.min.css',
  ];

  return app.gulp.src(modules)
    .pipe(app.gulp.dest(app.path.build.css));
};