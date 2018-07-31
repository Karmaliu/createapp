1. react+redux+react-router构建
2. 增加了saga
3. 增加了react-router-dom集成到redux
// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))
4. 跳转可直接派发putsh跳转
5. 若没有样式请访问下面连接 更改webpack配置 
  exclude: /node_modules|antd\.css/,
  解决antd 和 CSS Modules不能混用
  针对antd 不开启CSS Modules处理
 https://github.com/css-modules/css-modules/pull/65


  {
            test: /\.(less|css)$/,
            exclude: [/node_modules/],
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  // importLoaders: 1,
                  modules: true,
                  localIdentName: "[local]_[hash:base64:8]"
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          }, {
            test: /\.css$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: "style-loader"
              }, {
                loader: "css-loader",
                options: {
                  importLoaders: 1
                }
              }
            ]
          },