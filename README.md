lokka-theme-smallstart
======================


これは何？
-----

Lokkaで出来たCSM「[スモールスタート](http://blog.mat-aki.net/)」のためのテーマです。

注意
--

最新版のLokka用に作られております。Lokkaのupdateをお願い致します。

使えるマークアップ
---------

マークアップ方法は以下になります（※text.txtにサンプルがあります）。

- - - - - -

&lt;p&gt;普通の文章&lt;/p&gt;

- - - - - -

&lt;ul&gt;

 &lt;li&gt;番号なしリスト&lt;/li&gt;

&lt;li&gt;番号なしリスト&lt;/li&gt;

&lt;li&gt;番号なしリスト&lt;/li&gt;

&lt;/ul&gt;

- - - - - -

&lt;ol&gt;

&lt;li&gt;番号ありリスト&lt;/li&gt;

&lt;li&gt;番号ありリスト&lt;/li&gt;

&lt;li&gt;番号ありリスト&lt;/li&gt;  

&lt;/ol&gt; 

- - - - - -

&lt;blockquote&gt;

&lt;p&gt;引用文&lt;/p&gt;

&lt;/blockquote&gt;

- - - - - -

&lt;dl&gt;

&lt;dt&gt;定義するもの&lt;/dt&gt;

&lt;dd&gt;定義の内容&lt;/dd&gt;

&lt;dt&gt;定義するもの&lt;/dt&gt;

&lt;dd&gt;定義の内容&lt;/dd&gt;

&lt;/dl&gt;

- - - - - -

コードスニペットは以下の用に書きます。

&lt;pre class="brush: ruby"&gt;gem "heroku_backup_task", :git =&gt; "git://github.com/mataki/heroku_backup_task.git"  

  &lt;/pre&gt;

- - - - - -

画像は&lt;p class ="image"&gt;で囲います。

&lt;p class="image"&gt;&lt;img src="画像のパス" alt="画像名"&gt;&lt;/p&gt;