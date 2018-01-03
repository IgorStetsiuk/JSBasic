const gulp = require('gulp'),
    gulpsync = require('gulp-sync')(gulp),
    sass = require('gulp-sass'),
    CacheBuster = require('gulp-cachebust'),
    cleanCSS = require('gulp-clean-css'),
    del = require('del'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer');

const assetsPath = './assets';
const sassWatchPattern = `${assetsPath}/**/*.scss`;
const jsWatchPattern = `${assetsPath}/**/*.js`;
const htmlWatchPattern = './template.html';
const outputPath = './dist';

const cachebust = new CacheBuster();

gulp.task('sass', () =>
    gulp.src(sassWatchPattern)
        .pipe(sass({
            trace: true,
            verbose: true
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest(assetsPath))
);


gulp.task('copy:style', () =>
    gulp.src(`${assetsPath}/**/style.css`)
        .pipe(cleanCSS({ compatibility: 'ie11' }))
        .pipe(cachebust.resources())
        .pipe(gulp.dest(outputPath))
);

gulp.task('copy:js', () =>
    gulp.src(`${assetsPath}/**/main.js`)
        .pipe(cachebust.resources())
        .pipe(gulp.dest(outputPath))
);

gulp.task('copy:img', () =>
    gulp.src(`${assetsPath}/images/**/*.*`)
        .pipe(cachebust.resources())
        .pipe(gulp.dest(`${outputPath}/images`))
);

gulp.task('copy', ['copy:style', 'copy:img', 'copy:js']);

gulp.task('replace:html', () =>
    gulp.src(htmlWatchPattern)
        .pipe(rename('index.html'))
        .pipe(cachebust.references())
        .pipe(gulp.dest('./'))
);

gulp.task('replace:css', () =>
    gulp.src(`${outputPath}/**/*.css`)
        .pipe(cachebust.references())
        .pipe(gulp.dest(outputPath))
);

gulp.task('replace:js', () =>
    gulp.src(`${outputPath}/**/*.js`)
        .pipe(cachebust.references())
        .pipe(gulp.dest(outputPath))
);

gulp.task('replace-hash', ['replace:html', 'replace:css', 'replace:js']);

gulp.task('clean', () => del([outputPath, 'index.html'], { force: true }));

gulp.task('build', gulpsync.sync(['clean', 'sass', 'copy', 'replace-hash']));

gulp.task('sass-watch', () => gulp.watch([sassWatchPattern, jsWatchPattern, htmlWatchPattern], ['build']));
