<li class="tab-1">
                            <div class="clearfix title1">
                                <div class="fl">{dede:field name='typename'/}</div>
                                <div class="fr"><a href="{dede:field name='typeurl'/}" target="_blank">MORE+</a></div>
                            </div>
                            <div class="line"></div>
                            <div class="ul-box1">
                                {dede:arclist pagesize="1" flag="a" titlelen="46" orderby='rand'}
                                <div class="clearfix li">
                                    <div class="pic fl">
                                        <img src="[field:litpic/]" style="border: none" alt="[field:title /]">
                                    </div>
                                    <div class="ul-box1-article fl">
                                        <h3>[field:title /]</h3>
                                        <p>[field:description function="cn_substr(@me,120)"/]... <span><a href="[field:arcurl /]" target="_blank">【查看更多】</a></span></p>
                                    </div>
                                </div>
                                {/dede:arclist}
                                <div class="zhenzhuang clearfix">
                                    <ul class="clearfix">
                                        {dede:arclist pagesize="8" noflag="a" titlelen="46" orderby='rand'}
                                        <li>
                                            <a href="[field:arcurl /] " target="_blank">
                                                [field:title /]
                                            </a>
                                        </li>
                                        {/dede:arclist}
                                    </ul>
                                </div>
                            </div>
                        </li>