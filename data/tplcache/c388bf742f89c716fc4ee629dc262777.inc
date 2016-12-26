<li>
                                    {dede:arclist row="1" flag="h,p" titlelen="46" orderby='pubdate'}
                                    <div class="hot-art clearfix">
                                        <div class="clearfix">
                                            <div class="hot fl">
                                                <img src="[field:litpic/]" style="border: none" alt="[field:title /]">
                                            </div>
                                            <div class="arti">
                                                <h3>[field:title /]</h3>
                                                <p>[field:description function="cn_substr(@me,120)"/]... <span><a href="[field:arcurl /]" target="_blank">[ฯ๊ว้]</a></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/dede:arclist}
                                    <div class="lis clearfix">
                                        <ul class="clearfix">
                                            {dede:arclist row="6" noflag='h' titlelen="46" orderby='pubdate'}
                                            <li>
                                                <a href="[field:arcurl /] " target="_blank">
                                                    [field:title /]
                                                    <ins>
                                                        <script src="/plus/count.php?view=yes&aid=[field:id/]&mid=[field:mid/]" type='text/javascript' language="javascript"></script>
                                                    </ins>
                                                </a>
                                            </li>
                                            {/dede:arclist}
                                        </ul>
                                    </div>
                                </li>