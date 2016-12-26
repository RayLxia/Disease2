<li class="projects-box">
                            <h3><a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a></h3>
                            <ul class="projects clearfix">
                                {dede:arclist titlelen='42' row='20'}
                                    <li>
                                        <a href="[field:arcurl /]">
                                            [field:title /]
                                        </a>
                                    </li>
                                {/dede:arclist}
                            </ul>
                        </li>